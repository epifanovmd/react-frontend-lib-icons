import React, { FC, memo } from 'react';
import NewspaperSvg from '../svg/newspaper.svg';

export interface INewspaperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperIcon: FC<INewspaperIconProps> = memo(props => {
  return <NewspaperSvg {...props} />;
});
