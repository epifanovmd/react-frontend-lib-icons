import React, { FC, memo } from 'react';
import ContactsOutlineSvg from '../svg/contacts-outline.svg';

export interface IContactsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContactsOutlineIcon: FC<IContactsOutlineIconProps> = memo(props => {
  return <ContactsOutlineSvg {...props} />;
});
