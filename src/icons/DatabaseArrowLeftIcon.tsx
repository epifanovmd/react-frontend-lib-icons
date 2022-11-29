import React, { FC, memo } from 'react';
import DatabaseArrowLeftSvg from '../svg/database-arrow-left.svg';

export interface IDatabaseArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowLeftIcon: FC<IDatabaseArrowLeftIconProps> = memo(props => {
  return <DatabaseArrowLeftSvg {...props} />;
});
