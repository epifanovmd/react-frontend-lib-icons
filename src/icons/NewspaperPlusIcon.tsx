import React, { FC, memo } from 'react';
import NewspaperPlusSvg from '../svg/newspaper-plus.svg';

export interface INewspaperPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperPlusIcon: FC<INewspaperPlusIconProps> = memo(props => {
  return <NewspaperPlusSvg {...props} />;
});
