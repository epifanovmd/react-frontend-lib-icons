import React, { FC, memo } from 'react';
import StretchToPageSvg from '../svg/stretch-to-page.svg';

export interface IStretchToPageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StretchToPageIcon: FC<IStretchToPageIconProps> = memo(props => {
  return <StretchToPageSvg {...props} />;
});
