import React, { FC, memo } from 'react';
import KeyWirelessSvg from '../svg/key-wireless.svg';

export interface IKeyWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyWirelessIcon: FC<IKeyWirelessIconProps> = memo(props => {
  return <KeyWirelessSvg {...props} />;
});
