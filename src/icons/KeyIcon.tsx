import React, { FC, memo } from 'react';
import KeySvg from '../svg/key.svg';

export interface IKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyIcon: FC<IKeyIconProps> = memo(props => {
  return <KeySvg {...props} />;
});
