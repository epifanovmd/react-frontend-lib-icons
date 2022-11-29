import React, { FC, memo } from 'react';
import KeyOutlineSvg from '../svg/key-outline.svg';

export interface IKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyOutlineIcon: FC<IKeyOutlineIconProps> = memo(props => {
  return <KeyOutlineSvg {...props} />;
});
