import React, { FC, memo } from 'react';
import NewspaperRemoveSvg from '../svg/newspaper-remove.svg';

export interface INewspaperRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperRemoveIcon: FC<INewspaperRemoveIconProps> = memo(props => {
  return <NewspaperRemoveSvg {...props} />;
});
