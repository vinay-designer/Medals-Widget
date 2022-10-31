(ns medals.utils
  (:require [reagent.core :as r]
            [medals.constants :as default-colors]))


(defn get-total-count [{:keys [gold silver bronze]}]
  (reduce (fn [total summation-key]
            (+ total summation-key))
           0 [gold silver bronze]))


(defn sort-countries [countries,sort-by]
  (sort (fn [country-a country-b] (cond
                                  (> (get country-a sort-by) (get country-b sort-by)) -1
                                  (< (get country-a sort-by) (get country-b sort-by)) 1
                                  :else (case sort-by
                                          :total (if (> (:gold country-a) (:gold country-b)) -1 1)
                                          :gold (if (>  (:silver country-a) (:silver country-b)) -1 1)
                                          :silver (if (> (:gold country-a) (:gold country-b)) -1 1)
                                          :bronze (if (> (:gold country-a) (:gold country-b)) -1 1)))) countries))

(defn get-countries-with-total [countries]
  (map (fn [country] (assoc country :total (get-total-count country))) countries))