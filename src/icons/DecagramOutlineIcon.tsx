import React, { FC, memo } from 'react';
import DecagramOutlineSvg from '../svg/decagram-outline.svg';

export interface IDecagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecagramOutlineIcon: FC<IDecagramOutlineIconProps> = memo(props => {
  return <DecagramOutlineSvg {...props} />;
});
