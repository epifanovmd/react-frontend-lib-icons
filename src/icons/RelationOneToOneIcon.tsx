import React, { FC, memo } from 'react';
import RelationOneToOneSvg from '../svg/relation-one-to-one.svg';

export interface IRelationOneToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToOneIcon: FC<IRelationOneToOneIconProps> = memo(props => {
  return <RelationOneToOneSvg {...props} />;
});
