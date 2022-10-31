(ns medals.core
  (:require
   [day8.re-frame.http-fx]
   [medals.config :as config]
   [medals.events :as events]
   [medals.views :as views]
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
 )) 


(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (mount-root))