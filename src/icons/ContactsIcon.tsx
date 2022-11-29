import React, { FC, memo } from 'react';
import ContactsSvg from '../svg/contacts.svg';

export interface IContactsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContactsIcon: FC<IContactsIconProps> = memo(props => {
  return <ContactsSvg {...props} />;
});
