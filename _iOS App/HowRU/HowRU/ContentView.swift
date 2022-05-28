//
//  ContentView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import SwiftUI

/**
 Decides whether to show the login/signup views or the dashboard view, depending if the user is currently logged in or not.
 */
struct ContentView: View {
    
    @EnvironmentObject var authManager: AuthManager
    
    var body: some View {
        
        if authManager.userSession == nil {
            LoginView()
        } else {
            if let user = authManager.currentUser {
                DashboardView(user: user)
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
