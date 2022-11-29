import React, { FC, memo } from 'react';
import KeyAlertSvg from '../svg/key-alert.svg';

export interface IKeyAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyAlertIcon: FC<IKeyAlertIconProps> = memo(props => {
  return <KeyAlertSvg {...props} />;
});
