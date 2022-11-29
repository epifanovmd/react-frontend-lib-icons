import React, { FC, memo } from 'react';
import ContactlessPaymentCircleOutlineSvg from '../svg/contactless-payment-circle-outline.svg';

export interface IContactlessPaymentCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContactlessPaymentCircleOutlineIcon: FC<IContactlessPaymentCircleOutlineIconProps> = memo(props => {
  return <ContactlessPaymentCircleOutlineSvg {...props} />;
});
