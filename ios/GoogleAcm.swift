@objc(GoogleAcm)
class GoogleAcm: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }

  @objc(signInWithGoogle:withResolver:withRejecter:)
  func signInWithGoogle(params: NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    reject("ERROR", "Not Supported", nil)
  }

  @objc(signOut:withResolver:withRejecter:)
  func signOut( a: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    reject("ERROR", "Not Supported", nil)
  }
}
