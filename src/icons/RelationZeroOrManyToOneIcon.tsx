import React, { FC, memo } from 'react';
import RelationZeroOrManyToOneSvg from '../svg/relation-zero-or-many-to-one.svg';

export interface IRelationZeroOrManyToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrManyToOneIcon: FC<IRelationZeroOrManyToOneIconProps> = memo(props => {
  return <RelationZeroOrManyToOneSvg {...props} />;
});
