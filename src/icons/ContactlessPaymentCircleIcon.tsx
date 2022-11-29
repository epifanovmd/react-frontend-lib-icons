import React, { FC, memo } from 'react';
import ContactlessPaymentCircleSvg from '../svg/contactless-payment-circle.svg';

export interface IContactlessPaymentCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContactlessPaymentCircleIcon: FC<IContactlessPaymentCircleIconProps> = memo(props => {
  return <ContactlessPaymentCircleSvg {...props} />;
});
