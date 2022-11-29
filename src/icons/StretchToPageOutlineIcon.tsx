import React, { FC, memo } from 'react';
import StretchToPageOutlineSvg from '../svg/stretch-to-page-outline.svg';

export interface IStretchToPageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StretchToPageOutlineIcon: FC<IStretchToPageOutlineIconProps> = memo(props => {
  return <StretchToPageOutlineSvg {...props} />;
});
