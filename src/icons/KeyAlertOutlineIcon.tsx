import React, { FC, memo } from 'react';
import KeyAlertOutlineSvg from '../svg/key-alert-outline.svg';

export interface IKeyAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyAlertOutlineIcon: FC<IKeyAlertOutlineIconProps> = memo(props => {
  return <KeyAlertOutlineSvg {...props} />;
});
