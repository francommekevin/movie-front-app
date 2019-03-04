import { Subscription } from 'rxjs';

export class SubscriberUtil {
  private static _subscriptionRegistry = new Map<string, Subscription>();

  /**
   * Provide a way to debounce a call chain of akin subscriptions
   *
   * Abort previous subscription when a new one raises and so on
   */
  static relay(subscription: Subscription, identifier: string) {
    const previousSubscription = SubscriberUtil._subscriptionRegistry.get(identifier);

    if (previousSubscription && !previousSubscription.closed) {
      previousSubscription.unsubscribe();
    }

    SubscriberUtil._subscriptionRegistry.set(identifier, subscription);

    return subscription;
  }
}
