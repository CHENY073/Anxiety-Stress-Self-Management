//
//  LogoView.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI

struct LogoView: View {
    var body: some View {
        
        VStack {
            Image("Logo")
                .resizable()
                .scaledToFit()
                .frame(width: 150, height: 150)
        }
        
    }
}

struct LogoView_Previews: PreviewProvider {
    static var previews: some View {
        ZStack {
            BackgroundGradientView()
            LogoView()
        }
    }
}
