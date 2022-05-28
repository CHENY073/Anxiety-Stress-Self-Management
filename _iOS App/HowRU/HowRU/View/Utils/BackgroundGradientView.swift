//
//  BackgroundGradientView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI

struct BackgroundGradientView: View {
    var body: some View {
        
        LinearGradient(gradient: Gradient(colors: [Color("Main01"), Color("Main02").opacity(0.5)]), startPoint: .top, endPoint: .bottom)
            .ignoresSafeArea()
        
    }
}

struct BackgroundGradientView_Previews: PreviewProvider {
    static var previews: some View {
        BackgroundGradientView()
    }
}
