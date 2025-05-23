#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(GoogleAcm, NSObject)

RCT_EXTERN_METHOD(signInWithGoogle:(NSDictionary *)params
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(signOut:(float)a
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
                 
+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
