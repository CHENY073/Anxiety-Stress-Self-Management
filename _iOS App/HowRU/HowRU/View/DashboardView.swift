//
//  DashboardView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI
import Combine

struct DashboardView: View {
    
    let user: AppUser
    @StateObject var viewModel: ViewModel = ViewModel()
    
    var body: some View {
        ZStack {
            VStack {
                HStack {
                    Spacer()
                    Text("- Dashboard -")
                        .font(.system(size: 24))
                        .fontWeight(.semibold)
                    Spacer()
                }  // end of HStack
                .overlay {
                    HStack {
                        Spacer()
                        Button {
                            AuthManager.shared.signout()
                        } label: {
                            Text("Logout")
                                .foregroundColor(Color(.systemGray))
                        }
                        .padding(.trailing)
                    }
                }  // end of HStack Overlay
                
                Spacer()
                
                VStack(spacing: 20) {
                    
                    MainButtonView(text: "Mood Diary", color: Color("Main01"))
                    
                    MainButtonView(text: "Exercises", color: Color("Main02"))
                    
                }
                
                Spacer()
            }
        }
    }
}

struct DashboardView_Previews: PreviewProvider {
    static var previews: some View {
        DashboardView(user: appUser01)
    }
}
