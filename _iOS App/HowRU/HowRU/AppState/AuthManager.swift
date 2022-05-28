//
//  AuthManager.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import SwiftUI
import Firebase
import FirebaseAuth

/**
 A singleton class in charge of Authentication. It uses the shared variable to access methods like: fetchUser(), login(), register(), signout(), etc
 */
class AuthManager: ObservableObject {
    
    @Published var userSession: User?  // Firebase User
    @Published var currentUser: AppUser?
    
    static let shared = AuthManager()
    
    /**
     Initializes the class by fetching the current user.
     */
    private init() {
        userSession = Auth.auth().currentUser
        fetchUser()
    }
    
    /**
     Fetches the user from Firebase.
     */
    func fetchUser() {
        guard let uid = userSession?.uid else { return }
        AppUser.collection.document(uid).getDocument { snapshot, _ in
            guard let user = try? snapshot?.data(as: AppUser.self) else { return }
            self.currentUser = user
        }
    }
    
    /**
     Signs in using an email address and password.
     - parameter email: user's email.
     - parameter password: user's password.
     */
    func login(withEmail email: String, password: String) {
        Auth.auth().signIn(withEmail: email, password: password) { result, error in
            if let error = error {
                print("DEBUG: Login Failed \(error.localizedDescription)")
                return
            }
            
            guard let user = result?.user else { return }
            self.userSession = user
            self.fetchUser()
        }
    }
    
    /**
     Registers user using an email address, password, first name, and last name.
     - parameter email: user's email.
     - parameter password: user's password.
     - parameter firstName: user's first name.
     - parameter lastname: user's last name.
     */
    func register(withEmail email: String, password: String, firstName: String, lastName: String) {
        Auth.auth().createUser(withEmail: email, password: password) { result, error in
            if let error = error {
                print("DEBUG: Register Failed \(error.localizedDescription)")
                return
            }
            
            guard let user = result?.user else { return }
            
            let data = ["uid": user.uid,
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email]
            
            AppUser.collection.document(user.uid).setData(data) { _ in
                print("Successfully uploaded data")
                self.userSession = user
                self.fetchUser()
            }
            
        }
    }
    
    /**
     Signs out the user from Firebase.
     */
    func signout() {
        self.userSession = nil
        try? Auth.auth().signOut()
    }
    
    
    func resetPassword() {
        // implement here
    }
    
}
