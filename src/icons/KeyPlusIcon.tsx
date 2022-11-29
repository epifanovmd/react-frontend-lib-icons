import React, { FC, memo } from 'react';
import KeyPlusSvg from '../svg/key-plus.svg';

export interface IKeyPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyPlusIcon: FC<IKeyPlusIconProps> = memo(props => {
  return <KeyPlusSvg {...props} />;
});
