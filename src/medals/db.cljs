(ns medals.db
  (:require
   [medals.constants :as COUNTRIES]))


(def default-db
  {:sort :bronze :countries COUNTRIES/COUNTRIES})