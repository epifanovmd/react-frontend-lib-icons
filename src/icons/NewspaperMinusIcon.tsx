import React, { FC, memo } from 'react';
import NewspaperMinusSvg from '../svg/newspaper-minus.svg';

export interface INewspaperMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperMinusIcon: FC<INewspaperMinusIconProps> = memo(props => {
  return <NewspaperMinusSvg {...props} />;
});
