import React, { FC, memo } from 'react';
import KeyLinkSvg from '../svg/key-link.svg';

export interface IKeyLinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyLinkIcon: FC<IKeyLinkIconProps> = memo(props => {
  return <KeyLinkSvg {...props} />;
});
