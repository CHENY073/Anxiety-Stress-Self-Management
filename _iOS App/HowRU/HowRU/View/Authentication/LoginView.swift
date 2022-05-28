//
//  LoginView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/27/22.
//

import SwiftUI

import SwiftUI

struct LoginView: View {
    
    @EnvironmentObject var authManager: AuthManager
    @StateObject var viewModel = ViewModel()
    
    var body: some View {
        
        NavigationView {
            ZStack {
                BackgroundGradientView()
                
                VStack {
                    LogoView()
                        .padding(.bottom, 25)
                    
                    VStack(spacing: 20) {
                        EmailTextField(text: Binding(
                            get: { viewModel.email },
                            set: { viewModel.email = $0 }))
                        PasswordSecureField(text: Binding(
                            get: { viewModel.password },
                            set: { viewModel.password = $0 }), placeholder: "Password")
                    }  // end of VStack
                    .padding(.horizontal, 32)
                    
                    HStack {
                        Spacer()
                        
                        Button {
                            // Forgot Password Action
                            
                        } label: {
                            Text("Forgot Password")
                                .foregroundColor(.white)
                                .font(.system(size: 13, weight: .semibold))
                                .padding(.top)
                                .padding(.trailing, 28)
                        }
                    }  // end of HStack
                    
                    Button {
                        // Sign In Action
                        authManager.login(withEmail: viewModel.email, password: viewModel.password)
                    } label: {
                        AuthenticateButtonView(text: "Sign In")
                            .padding()
                    }

                    
                    Spacer()
                    
                    NavigationLink(
                        destination: SignupView()
                            .navigationBarHidden(true),
                        label: {
                            HStack {
                                Text("Don't have an account?")
                                    .font(.system(size: 14))
                                Text("Sign Up")
                                    .font(.system(size: 14, weight: .semibold))
                            }
                            .foregroundColor(.white)
                        }
                    )
                    .padding(.bottom, 16)
                    
                } // end of VStack
                .padding(.top, -44)
                
            }
        }  // end of ZStack
        
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
