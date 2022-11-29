import React, { FC, memo } from 'react';
import ViewHeadlineSvg from '../svg/view-headline.svg';

export interface IViewHeadlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewHeadlineIcon: FC<IViewHeadlineIconProps> = memo(props => {
  return <ViewHeadlineSvg {...props} />;
});
