(ns medals.views
  (:require
   [medals.main :refer [render-medal-widget]]))

(defn main-panel []
  [render-medal-widget])
