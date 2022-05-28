//
//  DashboardViewModel.swift
//  HowRU
//
//  Created by Raul Gutierrez Niubo on 5/28/22.
//

import SwiftUI
import Firebase

extension DashboardView {
    
    /**
     ViewModel of the Dashboard View. It is done as an extension to DashboardView to make sure it only gets used by it
     */
    @MainActor class ViewModel: ObservableObject {
        // It's a class in a struct so @MainActor is to ensure SwiftUI knows the code should trigger UI updates and must run on the main queue.
        
    }
    
}
