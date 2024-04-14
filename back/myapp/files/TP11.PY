

#1
from pymongo import MongoClient
import pandas as pd
client=MongoClient('localhost',27017)
db=client['TPS']
collection = db["resto"]
#2
def que2():
    nmbrcolection=collection.count_documents({})
    print("r le nombre de restaurants est ",nmbrcolection)

#3
def que3():   
    quartiers = collection.distinct("quartier")
    cuisines = collection.distinct("cuisine")
    print("Quartiers représentés :", quartiers)
    print("Types de cuisine :", cuisines)


#4
def que4():
    restaurants_chicken = collection.find({"cuisine": "Chicken"}, {"nom": 1, "quartier": 1, "_id": 0})
    print("Restaurants proposant uniquement du chiken:")
    for restaurant in restaurants_chicken:
        print(restaurant["nom"], "    ", restaurant["quartier"])

#5
def que5():
    restaurants_grade_z = collection.count_documents({"grades.note": "Z"})
    print("\nNombre de restaurants ayant eu au moins une fois le grade Z:", restaurants_grade_z)


#6 
def que6():
    restaurants_par_quartier = collection.aggregate([
        {"$group": {"_id": "$quartier", "count": {"$sum": 1}}}
    ])

    print("\nNombre de restaurants par quartier:")
    for quartier in restaurants_par_quartier:
        print(quartier["_id"], "  ", quartier["count"])

#7
def que7():
    cinq_cuisines_plus_presents = collection.aggregate([
        {"$group": {"_id": "$cuisine", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 5}
    ])

    print("\nCinq types de cuisine les plus présentes dans New-York:")
    for cuisine in cinq_cuisines_plus_presents:
        print(cuisine["_id"], "   ", cuisine["count"])


#8
def que8():
    restaurants_scores_moyens = collection.aggregate([
        {"$unwind": "$grades"},
        {"$group": {"_id": "$nom", "score_moyen": {"$avg": "$grades.score"}}},
        {"$sort": {"score_moyen": -1}}
    ])

    print("\nScore moyen de chaque restaurant (ordonné par score moyen décroissant):")
    for restaurant in restaurants_scores_moyens:
        print(restaurant["_id"], "   ", restaurant["score_moyen"])

#9
    
def que9():
    restaurants_grades = collection.aggregate([
        {"$unwind": "$grades"},
        {"$group": {"_id": {"restaurant": "$nom", "grades": "$grades.note"}, "score_moyen": {"$avg": "$grades.score"}}}
    ])

    data = {"Restaurant": [], "Grade": [], "Score Moyen": []}
    for restaurant in restaurants_grades:
        data["Restaurant"].append(restaurant["_id"]["restaurant"])
        data["Grade"].append(restaurant["_id"]["grades"])
        data["Score Moyen"].append(restaurant["score_moyen"])

    df = pd.DataFrame(data)
    pivot_table = df.pivot(index='Restaurant', columns='Grade', values='Score Moyen')

    print("\nDataFrame contenant les scores moyens pour chaque grade possible:")
    print(pivot_table)


que5()