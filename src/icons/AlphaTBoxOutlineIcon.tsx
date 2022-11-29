import React, { FC, memo } from 'react';
import AlphaTBoxOutlineSvg from '../svg/alpha-t-box-outline.svg';

export interface IAlphaTBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaTBoxOutlineIcon: FC<IAlphaTBoxOutlineIconProps> = memo(props => {
  return <AlphaTBoxOutlineSvg {...props} />;
});
