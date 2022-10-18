(ns medals.db
  (:require
   [medals.constants :refer [COUNTRIES]]))


(def default-db
  {:sort :bronze :countries COUNTRIES})