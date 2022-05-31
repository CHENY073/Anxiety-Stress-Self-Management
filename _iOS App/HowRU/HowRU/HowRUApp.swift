//
//  HowRUApp.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import SwiftUI
import Firebase

@main
struct HowRUApp: App {
    
    init() {
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
