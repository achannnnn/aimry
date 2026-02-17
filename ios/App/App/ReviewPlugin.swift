import Capacitor
import Foundation
import StoreKit
import UIKit

@objc(ReviewPlugin)
public class ReviewPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ReviewPlugin"
    public let jsName = "Review"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestReview", returnType: CAPPluginReturnPromise)
    ]

    @objc public func requestReview(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if #available(iOS 14.0, *) {
                let activeScene = UIApplication.shared.connectedScenes
                    .compactMap { $0 as? UIWindowScene }
                    .first { $0.activationState == .foregroundActive }

                if let activeScene {
                    SKStoreReviewController.requestReview(in: activeScene)
                } else {
                    SKStoreReviewController.requestReview()
                }
            } else {
                SKStoreReviewController.requestReview()
            }
            call.resolve()
        }
    }
}
