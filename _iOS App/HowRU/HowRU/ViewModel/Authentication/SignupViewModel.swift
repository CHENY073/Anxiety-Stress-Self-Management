//
//  SignupViewModel.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import Foundation

extension SignupView {
    
    // It's a class in a struct so @MainActor is to ensure SwiftUI knows the code should trigger UI updates and must run on the main queue.
    @MainActor class ViewModel: ObservableObject {
        
        @Published var firstName = ""
        @Published var lastName = ""
        @Published var email = ""
        @Published var password = ""
        @Published var confirmPassword = ""
        
    }
    
}
