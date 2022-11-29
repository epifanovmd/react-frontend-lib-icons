import React, { FC, memo } from 'react';
import DatabaseArrowRightSvg from '../svg/database-arrow-right.svg';

export interface IDatabaseArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowRightIcon: FC<IDatabaseArrowRightIconProps> = memo(props => {
  return <DatabaseArrowRightSvg {...props} />;
});
