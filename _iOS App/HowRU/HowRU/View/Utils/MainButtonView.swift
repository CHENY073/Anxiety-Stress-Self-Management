//
//  MainButtonView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI

struct MainButtonView: View {
    
    let text: String
    let color: Color
    
    var body: some View {
        
        Text(text)
            .font(.headline)
            .foregroundColor(.white)
            .frame(width: 360, height: 70)
            .background(color.opacity(0.8))
            .clipShape(Capsule())
        
    }
}

struct MainButtonView_Previews: PreviewProvider {
    static var previews: some View {
        MainButtonView(text: "Exercises", color: Color("Main02"))
    }
}
