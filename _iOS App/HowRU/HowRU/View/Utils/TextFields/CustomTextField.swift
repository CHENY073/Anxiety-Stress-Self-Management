//
//  CustomTextField.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI

struct CustomTextField: View {
    
    @Binding var text: String
    let placeholder: Text
    let imageName: String
    var foregroundColor: Color?
    
    var body: some View {
        
        ZStack(alignment: .leading) {
            if text.isEmpty {
                placeholder
                    .foregroundColor(foregroundColor ?? Color(.init(white: 1, alpha: 0.8)))
                    .padding(.leading, 40)
            }
            
            HStack {
                Image(systemName: imageName)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 20, height: 20)
                    .foregroundColor(foregroundColor ?? .white)
                
                TextField("", text: $text)
                    .autocapitalization(.none)
            }
        }
        
    }
    
}

struct CustomTextField_Previews: PreviewProvider {
    static var previews: some View {
        ZStack {
            Color.black
                .ignoresSafeArea()
            CustomTextField(text: .constant(""), placeholder: Text("Email"), imageName: "envelope")
        }
    }
}
