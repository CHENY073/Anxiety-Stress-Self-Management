//
//  AppUser.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import FirebaseFirestoreSwift
import FirebaseFirestore

/**
 A representation of a User containing a user-id, first name, last name, and email.
 */
struct AppUser: Identifiable, Decodable {
    
    static let collection: CollectionReference = Firestore.firestore().collection("users")
    
    @DocumentID var id: String?
    let uid: String
    let firstName: String
    let lastName: String
    let email: String
    
    var isCurrentUser: Bool {
        return AuthManager.shared.userSession?.uid == id
    }
    
}
