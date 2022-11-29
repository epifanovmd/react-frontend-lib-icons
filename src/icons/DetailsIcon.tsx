import React, { FC, memo } from 'react';
import DetailsSvg from '../svg/details.svg';

export interface IDetailsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DetailsIcon: FC<IDetailsIconProps> = memo(props => {
  return <DetailsSvg {...props} />;
});
