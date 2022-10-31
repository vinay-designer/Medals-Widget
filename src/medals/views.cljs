(ns medals.views
  (:require
   [medals.main :as render-medal-widget]))

(defn main-panel []
  [render-medal-widget/render-medal-widget])