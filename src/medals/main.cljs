(ns medals.main
  (:require
   [medals.constants :as constants]
   [re-frame.core :as re-frame]
   [medals.events :as events]
   [medals.subs :as subs]
   [medals.utils :refer [get-countries-with-total sort-countries]]))


(defn table-headers [color selected-sort]
  ^{:key color} [:th {:class (str "medal-colors" " "  (if (= selected-sort (:color_name color)) "selected" ""))}
                 [:span {:class (:hex_code color) :on-click #(re-frame/dispatch [::events/change-selected-sort (:color_name color)])}]])

(defn country-medals [{:keys [code index] :as country}]
  ^{:key code} [:tr
                [:td {:col-span 10}
                 [:div {:class "medal-widget_country-info"}
                  [:span index]
                  [:img {
                      :alt code 
                      :width 50 
                      :height 30 
                      :src (str "https://countryflagsapi.com/png/" code)
                      }
                  ]
                  [:span code]]]
                (map (fn [key] ^{:key key} [:td (get country key)]) (filter (fn [key] (contains? constants/sort-values key)) (keys country)))])


(defn render-medal-widget []
  (let [sort @(re-frame/subscribe [::subs/sort])
        countries (sort-countries (get-countries-with-total @(re-frame/subscribe [::subs/countries])) sort)]
    [:div {:class "medals-container"}
    [:h2 "MEDAL TABLE"]
     [:table {:class "medals-table"}
      [:thead
       [:tr
        [:th {:col-span "10"}]
        (map (fn [color] (table-headers color sort)) constants/colors)
        [:th {:class (str (if (= sort :total) " selected " "") " cursor-pointer")}
         [:span {:on-click #(re-frame/dispatch [::events/change-selected-sort :total])}  "Total"]]]]
      [:tbody
       (map country-medals countries)]]]))

