(ns medals.events
  (:require
   [re-frame.core :as re-frame]
   [medals.db :as db]
   [ajax.core :as ajax]
   [medals.constants :refer [COUNTRIES]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))


(re-frame/reg-event-db
 ::initialize-db
 (fn-traced []
            db/default-db))

            
(re-frame/reg-event-db
 ::change-selected-sort
 (fn [db [_ selected-sort]]
   (assoc db :sort selected-sort)))