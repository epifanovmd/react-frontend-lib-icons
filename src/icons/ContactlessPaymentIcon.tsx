import React, { FC, memo } from 'react';
import ContactlessPaymentSvg from '../svg/contactless-payment.svg';

export interface IContactlessPaymentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContactlessPaymentIcon: FC<IContactlessPaymentIconProps> = memo(props => {
  return <ContactlessPaymentSvg {...props} />;
});
