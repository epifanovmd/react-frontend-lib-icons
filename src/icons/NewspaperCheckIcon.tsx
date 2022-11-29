import React, { FC, memo } from 'react';
import NewspaperCheckSvg from '../svg/newspaper-check.svg';

export interface INewspaperCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperCheckIcon: FC<INewspaperCheckIconProps> = memo(props => {
  return <NewspaperCheckSvg {...props} />;
});
