//
//  SignupView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import SwiftUI

struct SignupView: View {
    
    @StateObject var viewModel = ViewModel()
    @Environment(\.presentationMode) var mode
    @EnvironmentObject var authManager: AuthManager
    
    var body: some View {
        
        ZStack {
            
            BackgroundGradientView()
            
            VStack {
                LogoView()
                    .padding(.bottom, 25)
                
                VStack(spacing: 20) {
                    
                    UserTextField(text: Binding(
                        get: { viewModel.firstName },
                        set: { viewModel.firstName = $0 }
                    ), placeholder: "First Name")
                    UserTextField(text: Binding(
                        get: { viewModel.lastName },
                        set: { viewModel.lastName = $0 }
                    ), placeholder: "Last Name")
                    EmailTextField(text: Binding(
                        get: { viewModel.email },
                        set: { viewModel.email = $0 }
                    ))
                    PasswordSecureField(text: Binding(
                        get: { viewModel.password },
                        set: { viewModel.password = $0 }
                    ), placeholder: "Password")
                    PasswordSecureField(text: Binding(
                        get: { viewModel.confirmPassword },
                        set: { viewModel.confirmPassword = $0 }
                    ), placeholder: "Confirm Password")
                    
                }  // end of VStack
                .padding(.horizontal, 32)
                
                Button {
                    // Sign Up Action
                    authManager.register(withEmail: viewModel.email, password: viewModel.password, firstName: viewModel.firstName, lastName: viewModel.lastName)
                } label: {
                    AuthenticateButtonView(text: "Sign Up")
                        .padding()
                }
                
                Spacer()
                
                Button {
                    mode.wrappedValue.dismiss()
                } label: {
                    HStack {
                        Text("Already have an account?")
                            .font(.system(size: 14))
                        Text("Sign In")
                            .font(.system(size: 14, weight: .semibold))
                    }
                    .foregroundColor(.white)
                }
                .padding(.bottom, 16)
                
            }  // end of VStack
            .padding(.top, 20)
            
        }  // end of ZStack
        
    }
}

struct SignupView_Previews: PreviewProvider {
    static var previews: some View {
        SignupView()
    }
}
