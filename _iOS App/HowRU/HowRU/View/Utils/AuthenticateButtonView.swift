//
//  AuthenticateButtonView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI

struct AuthenticateButtonView: View {
    
    let text: String
    
    var body: some View {
        
        Text(text)
            .font(.headline)
            .foregroundColor(.white)
            .frame(width: 360, height: 50)
            .background(Color("Main02").opacity(0.8))
            .clipShape(Capsule())
        
    }
}

struct AuthenticateButtonView_Previews: PreviewProvider {
    static var previews: some View {
        AuthenticateButtonView(text: "Sign In")
    }
}
